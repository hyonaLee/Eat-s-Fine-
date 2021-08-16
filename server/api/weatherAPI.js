const request = require("request");
const std_time = new Date();
std_time.setMinutes(std_time.getMinutes());
const today = getFormatDate(std_time);
const time = getFormatTime(std_time) - 30;
const cheerio = require("cheerio");
console.log(time);
const API_KEY =
  "Z2oRhwh9W%2FF1y2REoV8Qrn%2FCTkw3FSWWi%2FFe8YxYjcK%2BvNAouydmvSydKUX7pFSNH89woOFmOEwaYZOKjZa4pw%3D%3D";
const API_STEM =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";

const weatherData = (lat, lon, callback) => {
  console.log("latitude: ", lat);
  console.log("longitude: ", lon);
  let rs = dfs_xy_conv("toXY", lat, lon);
  console.log("격자변환x", rs.x);
  console.log("격자변환y", rs.y);
  let api_url = `${API_STEM}?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&base_date=${today}&base_time=1100&nx=${rs.x}&ny=${rs.y}`;
  console.log(api_url);

  request(
    {
      url: api_url,
      method: "get",
    },
    (error, response, body) => {
      const $ = cheerio.load(body);
      let weather_array = [];
      $("item").each(function () {
        const category = $(this).find("category").text(); //자료구분코드
        const wea_val = $(this).find("fcstValue").text(); //실황 값
        const wea_date = $(this).find("baseDate").text(); //발표 일자
        const wea_time = $(this).find("baseTime").text(); //발표 시각

        weather_array.push({ category, wea_val, wea_date, wea_time });
        return weather_array;
      });
      callback(weather_array);
    }
  );
};

function getFormatDate(date) {
  let year = date.getFullYear(); //yyyy
  let month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : "0" + month; //month 두자리로 저장
  let day = date.getDate(); //d
  day = day >= 10 ? day : "0" + day; //day 두자리로 저장
  return year + "" + month + "" + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

function getFormatTime(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 30) {
    hour = hour - 1;
  }
  hour = hour >= 10 ? hour : "0" + hour;
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  return hour + "" + minutes;
}

var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기1준점 Y좌표(GRID)
//
// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
//

function dfs_xy_conv(code, v1, v2) {
  var DEGRAD = Math.PI / 180.0;
  var RADDEG = 180.0 / Math.PI;

  var re = RE / GRID;
  var slat1 = SLAT1 * DEGRAD;
  var slat2 = SLAT2 * DEGRAD;
  var olon = OLON * DEGRAD;
  var olat = OLAT * DEGRAD;

  var sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  var rs = {};
  if (code == "toXY") {
    rs["lat"] = v1;
    rs["lng"] = v2;
    var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
    ra = (re * sf) / Math.pow(ra, sn);
    var theta = v2 * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;
    rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
    rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  } else {
    rs["x"] = v1;
    rs["y"] = v2;
    var xn = v1 - XO;
    var yn = ro - v2 + YO;
    ra = Math.sqrt(xn * xn + yn * yn);
    if (sn < 0.0) {
      // eslint-disable-next-line no-unused-expressions
      -ra;
    }
    var alat = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    if (Math.abs(xn) <= 0.0) {
      theta = 0.0;
    } else {
      if (Math.abs(yn) <= 0.0) {
        theta = Math.PI * 0.5;
        if (xn < 0.0) {
          // eslint-disable-next-line no-unused-expressions
          -theta;
        }
      } else theta = Math.atan2(xn, yn);
    }
    var alon = theta / sn + olon;
    rs["lat"] = alat * RADDEG;
    rs["lng"] = alon * RADDEG;
  }
  return rs;
}

module.exports = weatherData;

import React, { useRef, useEffect, useState } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";
import { useMapContext } from "../../../contexts/map_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function ChangeMap() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const {
    locationSearch,
    longitude,
    latitude,
    setLatlngValue,
    setLatitude,
    setLongitude,
    setMyLocation,
    myLocation,
  } = useApplicationContext();
  const { setMapSearchData, setListExist } = useMapContext();
  const history = useHistory();
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
  const bounds = window.kakao.maps.LatLngBounds();
  let address ;

  useEffect(() => {
    let markers = [];
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    const ps = new window.kakao.maps.services.Places(map);
    // if (locationSearch === "") {
    //   geolocation();
    // }

    // function geolocation() {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     let locPosition = new window.kakao.maps.LatLng(latitude, longitude), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    //     message = '<span>현위치</span>'; // 인포윈도우에 표시될 내용입니다

    //     // 마커와 인포윈도우를 표시합니다
    //     displayMarker(locPosition,message);

    //     searchDetailAddrFromCoords(locPosition, function (result, status) {
    //       // 마커를 생성합니다
    //       let marker = new window.kakao.maps.Marker({
    //         map: map,
    //       });

    //       if (status === window.kakao.maps.services.Status.OK) {
    //         const detailAddr = !!result[0].road_address
    //           ? "<div>도로명주소 : " +
    //             result[0].road_address.address_name +
    //             "</div>"
    //           : "<div>지번 주소 : " + result[0].address.address_name + "</div>";
          
    //         setMyLocation(result[0].address.address_name);
    //         // 마커를 클릭한 위치에 표시합니다
    //         marker.setPosition(locPosition);
    //         marker.setMap(map);
    //         // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
    //         infowindow.setContent(detailAddr);
    //         infowindow.open(map, marker);
            
    //       }
    //     });
    //   });
    // }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      const iwContent = message; // 인포윈도우에 표시할 내용
      let iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    ps.keywordSearch(locationSearch, placesSearchCB);
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다

    function placesSearchCB(data, status, pagination) {
      if (status === window.kakao.maps.services.Status.OK) {
        //검색한 위도경도 구하기
        const coords = new window.kakao.maps.LatLng(data[0].y, data[0].x);
        setLatlngValue(coords);

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data);
      }
    }

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new window.kakao.maps.services.Geocoder();

    
        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
          searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
              
              // 마커를 생성합니다
              var marker = new window.kakao.maps.Marker({
              map: map
              }); 
              if (status === window.kakao.maps.services.Status.OK) {
                  var detailAddr = !!result[0].road_address ?
              result[0].road_address.address_name 
                   : result[0].address.address_name ;

                  var address = result[0].address.address_name
                  var content = '<div class="bAddr">' +
                                  detailAddr + 
                              '</div>';

                  // 마커를 클릭한 위치에 표시합니다 
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  infowindow.open(map, marker);
                  console.log(result[0].address.address_name);
                  setMyLocation(result[0].address.address_name);
                  console.log("마이로케이션",result[0].address.address_name)
                  // map.setBounds(detailAddr);
              }   
          });
      });
  

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayPlaces(places) {
      let fragment = document.createDocumentFragment(),
        bounds = new window.kakao.maps.LatLngBounds(),
        listStr = "";


      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();

      for (let i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        let placePosition = new window.kakao.maps.LatLng(
            places[i].y,
            places[i].x
          ),
          marker = addMarker(placePosition, i),
          itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function (marker, title) {
          window.kakao.maps.event.addListener(marker, "mouseover", function () {
            displayInfowindow(marker, title);
          });

          window.kakao.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });

        })(marker, places[i].place_name);
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }

    // 검색결과 항목을 Element로 반환하는 함수입니다
    function getListItem(index, places) {
      let el = document.createElement("li"),
        itemStr =
          '<span class="markerbg marker_' +
          (index + 1) +
          '"></span>' +
          '<div class="info">' +
          "   <h5>" +
          places.place_name +
          "</h5>";

      if (places.road_address_name) {
        itemStr +=
          "<span>" +
          places.road_address_name +
          "</span>" +
          '   <span class="jibun gray">' +
          places.address_name +
          "</span>";
      } else {
        itemStr += "    <span>" + places.address_name + "</span>";
      }

      itemStr +=
        '  <span class="tel">' + "Tel" + places.phone + "</span>" + "</div>";

      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, idx, title) {
      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new window.kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new window.kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    function displayInfowindow(marker, title) {
      const content = '<div style="padding:5px;z-index:1;">' + title + "</div>"; //지도 가게 호버했을때 상호명 뜨는것

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }



    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }
    //-------------------------------------------------------------------------------------
  }, [ locationSearch]);


  return (
      <MapDiv
        className="map"
        ref={container}
      />
  );
}

const MapDiv = styled.div`
  width: 100%;
  height: 90vh;
  @media screen and (max-width: 768px) {

    }
`;
export default ChangeMap;

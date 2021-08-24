import React, { useState, useEffect } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";


const MenuList = () => {
    
const { sky, setSky, currentMenu, setCurrentMenu } = useApplicationContext();
const CurrentWeatherData = { sky };

    const [menus, setMenus] = useState ([
        {
            id: 1,
            menuname: "짬뽕",
            weather: ["한파","흐림","비"]
        },
        {
            id: 2,
            menuname: "쌀국수",
            weather: ["한파","흐림","비","눈"]
        },
        {
            id: 3,
            menuname: "치킨",
            weather: ["맑음","한파","폭염"],
        },
        {
            id: 4,
            menuname: "칼국수",
            weather: ["한파","흐림","비","눈"]
        },
        {
            id: 5,
            menuname: "삼겹살",
            weather: ["한파","흐림","비","맑음"]
        },
        {
            id: 6,
            menuname: "햄버거",
            weather: ["한파","흐림","비","눈","맑음","폭염"]
        },
        {
            id: 7,
            menuname: "냉면",
            weather: ["폭염"]
        },
        {
            id: 8,
            menuname: "콩국수",
            weather: ["폭염"]
        },
        {
            id: 9,
            menuname: "곱창",
            weather: ["한파","흐림","비","눈"]
        },
        {
            id: 10,
            menuname: "피자",
            weather: ["한파","흐림","비","눈","맑음","폭염"]
        },
        {
            id: 11,
            menuname: "족발",
            weather: ["한파","흐림","비","눈"]
        },
        {
            id: 12,
            menuname: "보쌈",
            weather: ["한파","흐림","비","눈","맑음"]
        },
        {
            id: 13,
            menuname: "스테이크",
            weather: ["한파","흐림","비","눈","맑음"]
        },
        {
            id: 14,
            menuname: "파스타",
            weather: ["한파","흐림","비","눈","맑음"]
        },
        {
            id: 15,
            menuname: "막창",
            weather: ["한파","흐림","비","눈","맑음"]
        },
        {
            id: 16,
            menuname: "메밀소바",
            weather: ["맑음","폭염"]
        },
        {
            id: 17,
            menuname: "초밥",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 18,
            menuname: "된장찌개",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 19,
            menuname: "김치찌개",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 20,
            menuname: "소고기",
            weather: ["한파","흐림","눈","맑음","폭염"]
        },
        {
            id: 21,
            menuname: "삼계탕",
            weather: ["한파","흐림","눈","맑음","폭염"]
        },
        {
            id: 22,
            menuname: "훠궈",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 23,
            menuname: "마라탕",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 24,
            menuname: "자장면",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 25,
            menuname: "비빔국수",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 26,
            menuname: "대창",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 27,
            menuname: "불고기",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 28,
            menuname: "비빔밥",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
            id: 29,
            menuname: "만둣국",
            weather: ["한파","흐림","눈","맑음"]
        },
        {
        id: 30,
        menuname: "감자탕",
        weather: ["한파","흐림","눈","맑음"]
        }
    ]);

    const result = menus.map((menu,id) =>
    menu.menuname + menu.id + menu.weather)

    const SunMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("맑음") > -1).map(menu => menu.menuname);

    const CloudMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("흐림") > -1).map(menu => menu.menuname);

    const RainyMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("비") > -1).map(menu => menu.menuname);

    const SnowMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("눈") > -1).map(menu => menu.menuname);
    
    const ColdMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("한파") > -1).map(menu => menu.menuname);
    
    const HotMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("폭염") > -1).map(menu => menu.menuname);
         

    useEffect(() => {

        if (CurrentWeatherData.sky === "맑음") setCurrentMenu(SunMenu);
        else if (CurrentWeatherData.sky === "비") setCurrentMenu(RainyMenu);
        else if (CurrentWeatherData.sky === "소나기") setCurrentMenu(RainyMenu);
        else if (CurrentWeatherData.sky === "눈") setCurrentMenu(SnowMenu);
        else if (CurrentWeatherData.sky === "한파") setCurrentMenu(ColdMenu);
        else if (CurrentWeatherData.sky === "폭염") setCurrentMenu(HotMenu);
        else setCurrentMenu(CloudMenu);
        console.log(currentMenu)
      }, [setSky]);
    

    return (
        <></>
    )
}

export default MenuList
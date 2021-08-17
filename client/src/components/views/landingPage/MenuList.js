import React, { useState, useEffect } from "react";
import { useApplicationContext } from "../../../contexts/weatherAndMap_context";


const MenuList = () => {
    
const { sky, setSky, currentMenu, setCurrentMenu } = useApplicationContext();
const CurrentWeatherData = { sky };

    const [menus, setMenus] = useState ([
        {
            id: 1,
            menuname: "짬뽕",
            weather: ["추움","흐림","비"]
        },
        {
            id: 2,
            menuname: "쌀국수",
            weather: ["추움","흐림","비","눈"]
        },
        {
            id: 3,
            menuname: "치킨",
            weather: ["맑음","추움","더움"],
        },
        {
            id: 4,
            menuname: "칼국수",
            weather: ["추움","흐림","비","눈"]
        },
        {
            id: 5,
            menuname: "삼겹살",
            weather: ["추움","흐림","비","맑음"]
        },
        {
            id: 6,
            menuname: "햄버거",
            weather: ["추움","흐림","비","눈","맑음","더움"]
        },
        {
            id: 7,
            menuname: "냉면",
            weather: ["더움"]
        },
        {
            id: 8,
            menuname: "콩국수",
            weather: ["더움"]
        },
        {
            id: 9,
            menuname: "곱창",
            weather: ["추움","흐림","비","눈"]
        },
        {
            id: 10,
            menuname: "피자",
            weather: ["추움","흐림","비","눈","맑음","더움"]
        },
        {
            id: 11,
            menuname: "족발",
            weather: ["추움","흐림","비","눈"]
        },
        {
            id: 12,
            menuname: "보쌈",
            weather: ["추움","흐림","비","눈","맑음"]
        },
        {
            id: 13,
            menuname: "스테이크",
            weather: ["추움","흐림","비","눈","맑음"]
        },
        {
            id: 14,
            menuname: "파스타",
            weather: ["추움","흐림","비","눈","맑음"]
        },
        {
            id: 15,
            menuname: "막창",
            weather: ["추움","흐림","비","눈","맑음"]
        },
        {
            id: 16,
            menuname: "메밀소바",
            weather: ["비","맑음"]
        },
        {
            id: 17,
            menuname: "초밥",
            weather: ["추움","흐림","눈","맑음"]
        },
        {
            id: 18,
            menuname: "된장찌개",
            weather: ["추움","흐림","눈","맑음"]
        },
        {
            id: 19,
            menuname: "김치찌개",
            weather: ["추움","흐림","눈","맑음"]
        },
        {
            id: 20,
            menuname: "소고기",
            weather: ["추움","흐림","눈","맑음"]
        },
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
    menu.weather.indexOf("추움") > -1).map(menu => menu.menuname);
    
    const HotMenu = menus.filter((menu,id) => 
    menu.weather.indexOf("더움") > -1).map(menu => menu.menuname);
         

    useEffect(() => {

        if (CurrentWeatherData.sky === "맑음") setCurrentMenu(SunMenu);
        else if (CurrentWeatherData.sky === "비") setCurrentMenu(RainyMenu);
        else if (CurrentWeatherData.sky === "소나기") setCurrentMenu(RainyMenu);
        else if (CurrentWeatherData.sky === "눈") setCurrentMenu(SnowMenu);
        else if (CurrentWeatherData.sky === "추움") setCurrentMenu(ColdMenu);
        else if (CurrentWeatherData.sky === "더움") setCurrentMenu(HotMenu);
        else setCurrentMenu(CloudMenu);
        console.log(currentMenu)
      }, [setSky]);
    

    return (
        <></>
    )
}

export default MenuList


import { Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { StateContexts } from "$/utils/context"
import { Fragment, useContext, useEffect } from "react"
import { Link as ReactRouterLink } from "react-router"
import { isTrue } from "$/utils/state"
import { jsx } from "@emotion/react"




export function Text_101293345110516020862261840462185915770 () {
  
  const reflex___state____state__my_resume___components____footer_state = useContext(StateContexts.reflex___state____state__my_resume___components____footer_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["fontSize"] : "0.8em", ["color"] : "white" })},
("Version "+reflex___state____state__my_resume___components____footer_state.version_rx_state_+" \u2013 Date: "+reflex___state____state__my_resume___components____footer_state.today_rx_state_)
,)
  )
}

export function Grid_35281050167691710795432333708674827173 () {
  





  
  return (
    jsx(
RadixThemesGrid,
{columns:({ ["base"] : "1", ["md"] : "2", ["lg"] : "3" }),css:({ ["marginBottom"] : "3em", ["maxWidth"] : "1280px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" }),gap:"6"},
[({ ["title"] : "Rod Cap", ["description"] : "3D scanned and modeled in Fusion 360 to create a precise, functional part based on real-world dimensions, ready for manufacturing.", ["image_url"] : "/rod_cap_perspective.png", ["border"] : true, ["link"] : "rod_cap" }), ({ ["title"] : "Bell Bracket", ["description"] : " Topology optimized in Fusion 360 to create a lightweight, functional design for additive manufacturing.", ["image_url"] : "/bell_bracket_perspective.png", ["border"] : true, ["link"] : "bell_bracket" }), ({ ["title"] : "Single Power Screw", ["description"] : "Engineered with precise component and connection calculations, complete with 3D modeling and full technical documentation.", ["image_url"] : "/single_power_screw_perspective.png", ["border"] : true, ["link"] : "single_power_screw" })].map((project_rx_state_,index_7762dd0668cc50e9)=>(jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) }),key:index_7762dd0668cc50e9},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:("/projects/"+project_rx_state_["link"])},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (isTrue(project_rx_state_["border"]) ? "1px solid red" : "none") }),src:project_rx_state_["image_url"]},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em", ["color"] : "black", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:("/projects/"+project_rx_state_["link"])},
project_rx_state_["title"]
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
project_rx_state_["description"]
,),),))),)
  )
}

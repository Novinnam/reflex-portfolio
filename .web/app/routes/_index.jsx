

import { Fragment, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { StateContexts } from "$/utils/context"
import { DynamicIcon } from "lucide-react/dynamic.mjs"
import { isTrue } from "$/utils/state"
import { jsx } from "@emotion/react"



function Text_99633831357110369685866192190511901652 () {
  
  const reflex___state____state__my_resume___my_resume____hero_state = useContext(StateContexts.reflex___state____state__my_resume___my_resume____hero_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "18px", ["color"] : "#333333", ["lineHeight"] : "1.8", ["marginBottom"] : "1.5em", ["maxWidth"] : "1280px", ["@media screen and (min-width: 0px)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 62em)"] : ({ ["textAlign"] : "left" }) })},
reflex___state____state__my_resume___my_resume____hero_state.description_rx_state_
,)
  )
}

function Grid_29884419286892216221658959008603702739 () {
  
  const reflex___state____state__my_resume___my_resume____featured_projects_state = useContext(StateContexts.reflex___state____state__my_resume___my_resume____featured_projects_state)





  
  return (
    jsx(
RadixThemesGrid,
{columns:({ ["base"] : "1", ["md"] : "1", ["lg"] : "2" }),gap:"4"},
reflex___state____state__my_resume___my_resume____featured_projects_state.projects_rx_state_.map((project_rx_state_,index_2ddd4a5aa10ce4a5)=>(jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }) }),key:index_2ddd4a5aa10ce4a5},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx("img",{css:({ ["filter"] : "grayscale(100%)", ["transition"] : "filter 0.5s ease-in-out", ["width"] : "100%", ["&:hover"] : ({ ["filter"] : "grayscale(0%)" }), ["border"] : (isTrue(project_rx_state_["border"]) ? "1px solid red" : "none") }),src:project_rx_state_["image_url"]},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "1.1em" })},
project_rx_state_["title"]
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "gray" })},
project_rx_state_["description"]
,),),))),)
  )
}

function Flex_274458392877270375329160319754559664422 () {
  
  const reflex___state____state__my_resume___my_resume____hero_state = useContext(StateContexts.reflex___state____state__my_resume___my_resume____hero_state)





  
  return (
    jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",justify:({ ["initial"] : "center", ["md"] : "start" }),gap:"4"},
reflex___state____state__my_resume___my_resume____hero_state.social_links_rx_state_.map((link_rx_state_,index_81177bd6a025571f)=>(jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),key:index_81177bd6a025571f},
jsx(
ReactRouterLink,
{to:link_rx_state_["url"]},
jsx(DynamicIcon,{name:link_rx_state_["platform"].replaceAll("_", "-")},)
,),))),)
  )
}

function Img_313426746455881500796697668050988396767 () {
  
  const reflex___state____state__my_resume___my_resume____hero_state = useContext(StateContexts.reflex___state____state__my_resume___my_resume____hero_state)





  
  return (
    jsx("img",{css:({ ["@media screen and (min-width: 0px)"] : ({ ["width"] : "830px" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "990px" }), ["@media screen and (min-width: 80em)"] : ({ ["width"] : "1223px" }), ["height"] : "auto", ["borderRadius"] : "lg" }),src:reflex___state____state__my_resume___my_resume____hero_state.profile_image_rx_state_},)

  )
}

function Text_17037081057075227923768297436447827437 () {
  
  const reflex___state____state__my_resume___my_resume____hero_state = useContext(StateContexts.reflex___state____state__my_resume___my_resume____hero_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["@media screen and (min-width: 0px)"] : ({ ["fontSize"] : "20px", ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "28px" }), ["@media screen and (min-width: 80em)"] : ({ ["fontSize"] : "50px" }), ["fontWeight"] : "medium", ["fontFamily"] : "Georgia, serif", ["--default-font-family"] : "Georgia, serif", ["lineHeight"] : "1.5", ["@media screen and (min-width: 62em)"] : ({ ["textAlign"] : "left" }) })},
reflex___state____state__my_resume___my_resume____hero_state.bio_rx_state_
,)
  )
}

function Text_101293345110516020862261840462185915770 () {
  
  const reflex___state____state__my_resume___components____footer_state = useContext(StateContexts.reflex___state____state__my_resume___components____footer_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["fontSize"] : "0.8em", ["color"] : "white" })},
("Version "+reflex___state____state__my_resume___components____footer_state.version_rx_state_+" \u2013 Date: "+reflex___state____state__my_resume___components____footer_state.today_rx_state_)
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["background"] : "#f5f5f0", ["color"] : "text", ["width"] : "100%" })},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1280px", ["width"] : "100%", ["margin"] : "0 auto", ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"4"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "semibold", ["fontSize"] : "35px", ["color"] : "#000000", ["fontFamily"] : "Sans-serif", ["--default-font-family"] : "Sans-serif" })},
"Novinnam"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "red", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"mailto:mohammadhassan.novin.001@student.uni.lu"},
"Mohammadhassan.novin.001@student.uni.lu"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
"Home"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/about"},
"About"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "20px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/projects"},
"Projects"
,),),),),),jsx(
RadixThemesFlex,
{align:"center",css:({ ["gap"] : "3em", ["paddingTop"] : "4em", ["paddingBottom"] : "4em", ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["maxWidth"] : "1280px", ["width"] : "100%", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" }),direction:({ ["initial"] : "column", ["md"] : "row" }),justify:"center"},
jsx(
RadixThemesBox,
{css:({ ["height"] : "auto", ["overflow"] : "hidden", ["@media screen and (min-width: 0px)"] : ({ ["marginLeft"] : "0" }), ["@media screen and (min-width: 62em)"] : ({ ["marginLeft"] : "-2em" }) })},
jsx(Img_313426746455881500796697668050988396767,{},)
,),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["maxWidth"] : "1280px", ["alignSelf"] : "end", ["@media screen and (min-width: 0px)"] : ({ ["paddingLeft"] : "0" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingLeft"] : "3em" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0px)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 62em)"] : ({ ["alignItems"] : "start" }) }),direction:"column",gap:"4"},
jsx(Text_17037081057075227923768297436447827437,{},)
,jsx(Text_99633831357110369685866192190511901652,{},)
,jsx(Flex_274458392877270375329160319754559664422,{},)
,),),),jsx(
RadixThemesBox,
{css:({ ["backgroundColor"] : "black", ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["width"] : "100%", ["maxWidth"] : "1344px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["height"] : "42px" })},
jsx(
RadixThemesFlex,
{align:"center",css:({ ["height"] : "100%", ["width"] : "100%" }),direction:"row",justify:"center"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["fontSize"] : "0.9em", ["color"] : "white" })},
"Looking for a portfolio? The code for this website is open source. "
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "red", ["as"] : "span", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"always"},
jsx(
ReactRouterLink,
{to:"https://github.com/Novinnam"},
"View on Github"
,),),),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "70%", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["marginTop"] : "50px", ["marginBottom"] : "50px", ["padding"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["maxWidth"] : "1280px" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "1em", ["fontFamily"] : "Georgia, serif", ["--default-font-family"] : "Georgia, serif", ["font_size"] : ({ ["base"] : "32px", ["md"] : "48px", ["lg"] : "60px" }), ["textAlign"] : "center" })},
"Featured Projects"
,),jsx(Grid_29884419286892216221658959008603702739,{},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["fontWeight"] : "bold", ["color"] : "red", ["marginTop"] : "2em", ["alignSelf"] : "flex-end", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/projects"},
"SEE ALL PROJECTS"
,),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" }),direction:"column",gap:"3"},
jsx(RadixThemesSeparator,{css:({ ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["maxWidth"] : "1280px" }),size:"4"},)
,jsx(
RadixThemesGrid,
{columns:({ ["base"] : "1", ["md"] : "3" }),css:({ ["width"] : "100%", ["padding_x"] : ({ ["base"] : "1em", ["md"] : "2em" }), ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["maxWidth"] : "1280px" }),gap:"6"},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "18px" })},
"Novin"
,),jsx(
RadixThemesText,
{as:"p"},
"An independent full-stack web developer from Ireland."
,),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "red", ["fontSize"] : "16px", ["letterSpacing"] : "wide" })},
"PAGES"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
"Home"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/projects"},
"Projects"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/about"},
"About"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/now"},
"Now"
,),),),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "red", ["fontSize"] : "16px", ["letterSpacing"] : "wide" })},
"GET IN TOUCH"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"mailto:mohammadhassan.novin.001@student.uni.lu"},
"Email"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"https://www.linkedin.com/in/novinnnam/"},
"LinkedIn"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"https://github.com/Novinnam"},
"Github"
,),),),),),jsx(
RadixThemesBox,
{css:({ ["backgroundColor"] : "black", ["transition"] : "background-color 0.8s ease", ["&:hover"] : ({ ["backgroundColor"] : "#FF5900" }), ["height"] : "46px", ["maxWidth"] : "1280px", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["width"] : "100%", ["borderRadius"] : "15px", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto" })},
jsx(
RadixThemesFlex,
{align:"center",css:({ ["height"] : "100%" }),direction:"row",justify:"center",gap:"4"},
jsx(Text_101293345110516020862261840462185915770,{},)
,jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"#"},
"RSS"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"#"},
"Privacy"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"#"},
"More Info"
,),),),),),),jsx(
"title",
{},
"Novin | Software Developer"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

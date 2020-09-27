import React from 'react'

export function LeftArrow(){
    return(
        <object type="image/svg+xml" data="./src/icons/arrow.svg"/>
    )
}

export function Setting(){
    return(
        <object type="image/svg+xml" data="./src/icons/Vector.svg"/>
    )

type propsIcons = {
    width: number,
}

export const ArrowIco: React.FC<{
    width: number,
    height: number,
    rotate: number,
}> = ({width, height, rotate}) =>{
    return(
        <object className={`rotate${rotate} icon`} width={`${width}px`} height={`${height}`} type="image/svg+xml" data="./src/icons/settings/arrow.svg"/>
    )
}


export const SettingIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/settings/settings.svg"/>
    )
}

export const GithubIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/general_schedule/github.svg"/>
    )
}
 
export const CheckIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/general_schedule/check.svg"/>
    )
}


export const ColorPaletteIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/settings/color-palette.svg"/>
    )
}
 
export const DarkscreenIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/settings/darkscreen-icon.svg"/>
    )
}
 
export const EyeIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/settings/eye.svg"/>
    )
}
 
export const LightScreenIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/settings/lightscreen-icon.svg"/>
    )
}

export const EditIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`}  type="image/svg+xml" data="./src/icons/special_for_metor_mode/edit.svg"/>
    )
}

export const PlusIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/special_for_metor_mode/plus.svg"/>
    )
}

export const TrashIco: React.FC<propsIcons> = ({width}) =>{
    return(
        <object width={`${width}px`} type="image/svg+xml" data="./src/icons/special_for_metor_mode/trash.svg"/>
    )
}
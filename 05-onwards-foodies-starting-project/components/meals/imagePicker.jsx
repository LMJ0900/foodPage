'use client'
import Image from 'next/image';
import classes from './imagePicker.module.css'
import { useRef, useState } from 'react';
export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click()
       
    }

    function handleImageChange(event){
        const file = event.target.files[0]

        if (!file) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return(<>
    <div className={`${classes.picker} flex `}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>선택 이미지가 없음</p>}
                {pickedImage && <Image src={pickedImage} alt='유저가 선택한 이미지' fill></Image>}
            </div>
            <input className={classes.input} type="file" 
            id={name} accept='image/png, image/jpeg' name={name}
            ref={imageInput}
            onChange={handleImageChange}>
            </input>
        </div>
        <button className={`${classes.button} w-[10rem] h-[3rem] ml-[2rem]`} type='button' onClick={handlePickClick}>사진 업로드</button>
    </div>
    </>)
}
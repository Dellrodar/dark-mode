import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(()=>{
        const body = document.querySelector('body')
        if(darkMode){
           return setDarkMode(body.classList.toggle('dark-mode', true));
        }else{
          return  setDarkMode(body.classList.toggle('dark-mode', false));
        }
    }, [darkMode, setDarkMode]);

    return[darkMode, setDarkMode]
}
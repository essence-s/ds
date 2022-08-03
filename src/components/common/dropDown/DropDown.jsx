import React, { createContext, useContext, useRef } from 'react'
import './dropDown.css'

const DropDownContext = createContext()

const DropDownProvider = ({children,refDropDown,...others}) => {

    let buttonDropDown = (ref) =>{
        // let dropDownListS = ref;
        let dropDownListS = refDropDown.current.querySelector('.dropDown .dropDown-list')
        dropDownListS.classList.toggle('dropDownOpen')
    }

    
    return(
      <DropDownContext.Provider value={{
        buttonDropDown,
        // mouseenterF,
        // mouseleaveF,
        refDropDown,
        ...others
      }}>{children}</DropDownContext.Provider>
    );
}

let DropDown = ({children,className,...others})=>{

    let dropDown=useRef()
    let mouseenterF=()=>{
        let dropDownListS = dropDown.current.querySelector('.dropDown .dropDown-list')
        dropDownListS.style.maxHeight='100vh'
    }
    let mouseleaveF=()=>{
        let dropDownListS = dropDown.current.querySelector('.dropDown .dropDown-list')
        dropDownListS.style.maxHeight='0'
    }

    return(
        <DropDownProvider refDropDown={dropDown}>
            <div className={`dropDown ${className?className:''}`} 
            onMouseEnter={(e)=>mouseenterF(e)}
            onMouseLeave={(e)=>mouseleaveF(e)}
            ref={dropDown}>{children}</div>
        </DropDownProvider>
    )
}

let DropDownView = ({children,className,...others})=>{

    // let {buttonDropDown,mouseenterF,mouseleaveF} = useContext(DropDownContext)

    return(
        <div className={`dropDown-view ${className?className:''}`} 
        // onMouseEnter={(e)=>mouseenterF(e)}
        // onMouseLeave={(e)=>mouseleaveF(e)}
        // onClick={(e)=>buttonDropDown(e)}
        >
            {children}
        </div>
    )
}

let DropDownList = ({children,className,data,...others})=>{
    return(

        <div className={`dropDown-list ${className?className:''}`}>
            {data.map((d,i)=>{
                return(
                    <div key={i} className="dropDown-item">
                        {d}
                    </div>
                )
            })}
           
        </div>

    )
}
export {DropDown,DropDownView,DropDownList}

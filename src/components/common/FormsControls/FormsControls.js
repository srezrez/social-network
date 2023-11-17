import React from "react"
import s from './FormsControls.module.css';

export const FormControl = ({input, meta, fieldType, ...props}) => {
    const hasError = meta.touched && meta.error;

    return <div className={s.formControl + " " + (hasError ? s.error : "")}>
        {React.createElement(fieldType, {
            ...props,
            ...input
        })}
        {hasError && <span>{meta.error}</span>}
    </div>
}
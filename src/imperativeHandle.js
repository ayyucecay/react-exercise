import React, {useRef, useImperativeHandle, forwardRef} from "react";

const ImperativeHandle = () => {

    function Input(props,ref) {
        const btn = useRef();
        useImperativeHandle(ref, () => ({
            focus: () => {
                console.log('Input is in focus');
            },
        }));
        return <input ref={btn} {...props} placeholder="type here"/>;
    }
    Input = forwardRef(Input);
    const inputRef = useRef(null);
    return (
        <div>
            <Input onFocus={() => inputRef.current.focus()} ref={inputRef} />
        </div>
    );
};

export default ImperativeHandle;



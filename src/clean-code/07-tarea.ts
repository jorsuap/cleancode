(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor( ) {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string,
    }

    class InputElement {
        public htmlType:HtmlElement;
        public InputAttributes:InputAttributes;
        public inpustEvent;

        constructor({id, type, value, placeholder}:InputElementProps){
            this.htmlType = new HtmlElement(id,type);
            this.InputAttributes = new InputAttributes(value, placeholder);
            this.inpustEvent = new InputEvents();
        }
    }


    //? Idea para la nueva clase InputElement

     const nameField = new InputElement({
        id:'001',     
        value:'Fernando',
        type: 'input',
        placeholder: 'Enter first name',
    });

     console.log({ nameField });

})()
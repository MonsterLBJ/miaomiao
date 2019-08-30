import Vue from 'vue'
import Message from './Message'

export var message = (function (){
    return function(opts) { //配置参数
        var defaults ={
            title : '',
            content : '',
            cancel : '' ,
            ok: '',
            handleCancel : null,
            handleOk :null
        };
        var MyComponent = Vue.extend(Message);
        for ( var attr in opts ){
            defaults[attr]=opts[attr];
        }

        var vm = new MyComponent({
            el: document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok,
            },
            methods: {
                handleCancel(){
                    defaults.handlecancel && defaults.handlecancel.call(this),
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this),
                    document.body.removeChild(vm.$el);
                }
            },
        });
        document.body.appendChild(vm.$el);
    }
})();
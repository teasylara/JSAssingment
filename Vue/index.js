Vue.createApp({
    data() {
        return {
            message:"",
            repeatNu:0,
            result:"",
            positive:"must be positive"
            
        }
    },
    methods: {
        repeatResult2() {
            this.result = this.message.repeat(this.repeatNu);
        },
        repeatResult(message, repeatNu) {
            
            this.result=""
            
            for(i=0; i<repeatNu; i++)
            {
                this.result += this.message
            }
        }   
    }
}).mount("#app")
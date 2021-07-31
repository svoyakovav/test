const App ={
    data() {
        return {
            counter : 0,
            title: 'Счетчик',
            myplaceholder: 'введите че нить',
            inputValue : 'dfdfsf',
            notes:['Заметки', 'note1']
        } 
    }, 
    methods:{
        inputChangeHandler(event){
            console.log(event.target.value);
            this.inputValue = event.target.value;
        },
        addNote(){
            this.notes.push(this.inputValue);
            this.inputValue = '';
            console.log('addNote');
        },
        deletenote(key){
            this.notes.splice(key,1);
        }

    }

    
}
const app = Vue.createApp(App)
app.mount('#app');
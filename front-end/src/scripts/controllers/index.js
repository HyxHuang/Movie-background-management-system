import layoutView from '../views/layout.art'


class Index{
    constructor(){
        this.render()
    }
    render(){
        let html = layoutView({})
        
        $('#root').html(html)
       
    }
}
export default new Index()
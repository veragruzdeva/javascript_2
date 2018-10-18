var config = [{
    href: "/",
    name: "Главная"
}, {
    href: "/catalog",
    name: "Каталог"
}, {
    href: "/gallery",
    name: "Галерея",
    items: [{
        href: "/photo1",
        name: "Фото1"
    }, {
        href: "/photo2",
        name: "Фото2"
    }], 
}];

class Container {
    
}

class Menu extends Container {
    constructor(id, config) {
        super();
        this.id = id;
        this.items = [];
        this.createItems(config);
    }
    createItems(config){
        for (var i = 0; i < config.length; i++) {
            this.items.push(new MenuItem(config[i].href, config[i].name))
            console.log(config[i]);
        }
      
    }
    create(){
        document.write(this.render());
    }
    render(){
        var result = '<ul id = "' + this.id + '">';
        for (var i = 0; i < this.items.length; i++) {
            result += this.items[i].render();
        }

        result += "</ul>";
        return result;
    }

    remove() {
        var list = document.querySelectorAll("li");
        for (var i = 0; i < this.items.length; i++) {
            var removed = list[i].remove()
        }        
    }
};

class MenuItem extends Container {
    constructor(href, name){
        super();
        this.href = href;
        this.name = name;
    }
    render() {
        return '<li><a href = "' + this.href + '">' + this.name  + '</a></li>';
    }
}

var menu = new Menu("main_menu", config);
menu.create();
menu.remove(); 



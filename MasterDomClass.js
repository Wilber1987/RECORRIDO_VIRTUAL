import { ComponentsManager, WAjaxTools, WRender } from "./WDevCore/WModules/WComponentsTools.js";
import { WCssClass } from "./WDevCore/WModules/WStyledRender.js";
import "../WDevCore/WComponents/WAppNavigator.js";
const DOMManager = new ComponentsManager();
const DOMManagerMenu = new ComponentsManager();
class MasterDomClass extends ComponentsManager {
    constructor() {
        super();
        this.props = { className: "App" }
        this.children = [
            new headerClass(),
            new AsideClass(),
            new MainClass(),
            new FooterClass(),
            this.MasterStyle
        ];
    }
    MasterStyle = {
        type: "w-style",
        props: {
            ClassList: [
                new WCssClass(".App", {
                    display: "grid",
                    "grid-template-columns": "250px calc(100% - 250px)",
                    "grid-template-rows": "70px calc(100vh - 120px) 50px"
                }), new WCssClass(".AppHeader", {
                    "grid-column": "1/3",
                    "background-color": "#eee",
                    "border-bottom": "solid #4da6ff 10px"
                }), new WCssClass(".AppAside", {
                    "border-right": "solid #999999 1px"
                }), new WCssClass(".AppMain", {
                    overflow: "auto"
                }), new WCssClass(".AppFooter", {
                    "grid-column": "1/3",
                    "background-color": "#eee",
                    "border-top": "solid #4da6ff 5px"
                }), new WCssClass("body", {
                    padding: "0px",
                    margin: "0px",
                    "font-family": "Arial, Helvetica, sans-serif"
                }),
            ], MediaQuery: [{
                condicion: "(max-width: 600px)",
                ClassList: [
                    new WCssClass(`.App`, {
                        display: "grid",
                        "grid-template-columns": "100%",
                        "grid-template-rows": "70px auto calc(100vh - 120px) 50px"
                    }), new WCssClass(".AppHeader", {
                        "grid-column": "1/auto",
                        "background-color": "#eee",
                        "border-bottom": "solid #4da6ff 10px",
                    }), new WCssClass(".AppFooter", {
                        "grid-column": "1/auto",
                        "background-color": "#eee",
                        "border-top": "solid #4da6ff 5px"
                    }),
                ]
            }
            ]
        }
    };
}
class headerClass {
    constructor() {
        this.type = "header";
        this.props = { className: "AppHeader" }
        this.children = [
            this.Style,
            { type: 'img', props: { src: "./Media/logo.png" } },
        ];
    }
    Style = {
        type: "w-style",
        props: {
            ClassList: [
                new WCssClass(".AppHeader", {
                    display: "flex",
                    "justify-content": "right",
                    "align-items": "center",
                    padding: "0px 40px"
                }), new WCssClass(".AppHeader img", {
                    display: "block",
                    height: "100%"
                }),
            ]
        }
    };
}
class AsideClass {
    constructor() {
        this.type = "aside";
        this.props = { className: "AppAside" }
        this.children = [this.WNavComponents];
    }
    WNavComponents = {
        type: "w-app-navigator",
        props: {
            Direction: "column",
            title: "FAREM-Carazo",
            Elements: [{
                name: "Torreón Universitario", url: "#", action: async (ev) => {
                    exportRoot.children.splice(2,1)
                    var Tor = new lib.Torreon();
                    exportRoot.addChild(Tor);
                    const { TorreonDoc } = await import("./Modules/TorreonDoc.js");
                    await DOMManagerMenu.NavigateFunction("TorreonDoc", new TorreonDoc({ id: "TorreonDoc" }), "TNav"); 
                    await DOMManager.NavigateFunction("TORREON", new PhotoView("TORREON"), "ModulesDetail");                      
                }
            }, {
                name: "Diplotienda", url: "#", action: async (ev) => {
                }
            }, {
                name: "Biblioteca", url: "#", action: async (ev) => {
                }
            }, {
                name: "Edificio A", url: "#", action: async (ev) => {
                }
            }, {
                name: "Edificio B", url: "#", action: async (ev) => {
                }
            }, {
                name: "Edificio C", url: "#", action: async (ev) => {
                }
            }]
        }
    }
}
class MainClass {
    constructor() {
        this.type = "main";
        this.props = { className: "AppMain DocCont", id: "AppMain" }
        //this.children = [];
        const DivContainer = {
            type: "div",
            props: { id: "animation_container" },
            children: [{
                type: "canvas", props: {id: "canvas"}
            }]
        };
        const Style = {
            type: "w-style",
            props: {
                ClassList: [
                    new WCssClass(`.DocCont`, {
                        display: "grid",
                        "grid-template-columns": "300px calc(100% - 300px)",
                        "grid-template-rows": "460px 300px",
                        height: "90%",
                        "grid-column-gap": "10px",
                        "grid-row-gap": "10px",
                        padding: "10px",
                        //nuevaaaaasss
                        position:"relative"
                    }),new WCssClass(`.DocCont #TNav`, {                        
                        "box-shadow": "0 0 3px 0 rgba(0,0,0,0.3)",
                        "background-color": "#fff",  
                        overflow: "auto",                    
                    }),new WCssClass(`.DocCont #ModulesDetail`, { 
                        //opacity: "0.3",                      
                        "box-shadow": "0 0 3px 0 rgba(0,0,0,0.3)",
                        "background-color": "rgba(0,0,0,0.2)",
                        //height: "360px",
                        "grid-column": "1/3",
                        "grid-row": "2/3" 
                    }),new WCssClass(`.DocCont canvas`, {
                        width: "100%",
                        "box-shadow": "0 0 3px 0 rgba(0,0,0,0.3)",
                        "background-color": "#fff",
                        height: "460px"
                    }),
                ],
                MediaQuery: [{
                    condicion: "(max-width: 800px)",
                    ClassList: []
                },]
            }
        }
        this.children = [
            {type: "div", props : {id: "TNav"}},
            DivContainer,
            { type: "div", props: {id: "ModulesDetail"}},
            Style,
            {type: "script", props : {src: "./Modules/MAPA.js"}},
            {type: "script", props : {src: "./Modules/MAP_GO.js"}}
        ]
        setTimeout(()=>{
            DOMManager.NavigateFunction("TorreonDoc", new PhotoView(), "ModulesDetail");            
            init();
        }, 100);
    }
}
class FooterClass {
    constructor() {
        this.type = "footer";
        this.props = { className: "AppFooter" }
        this.children = [this.Style,
        { type: 'label', props: { innerText: "Derechos reservados UNAN-Managua, FAREM-Carazo" } },
        ];
    }
    Style = {
        type: "w-style",
        props: {
            ClassList: [
                new WCssClass(".AppFooter", {
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                })
            ]
        }
    };
}
class FooterNavigator extends ComponentsManager {
    constructor(props) {
        super();
        this.props = props;
    }
    type = "div";
    children = [{
        type: "ul",
        children: [{
            type: "li",
            props: {
                onclick: async () => {
                    const { Modules } = await
                        import("./Modules/Modules.js");
                    this.NavigateFunction("Modules", new Modules({ class: "DivContainer", id: "Modules", Foros: Foros }));
                }
            },
            children: [{
                type: "button",
                props: {
                    type: "button",
                    style: `background: url('./Media/icons/modules2.png') no-repeat;background-size: 100% 100%;`
                }
            }]
        },
        {
            type: "li",
            props: {
                onclick: async () => {
                    const { ForosView } = await
                        import("./Modules/ForosView.js");
                    let MyModules = await WAjaxTools.PostRequest("http://localhost:6601/" + 'api/User/PostTakeUsers', { IdUsers: 1 });
                    // let OModules = await WAjaxTools.PostRequest("http://localhost:6601/" + 'api/module/PostModules', { IdUsers: 1 });
                    this.NavigateFunction("ForosView", new ForosView({
                        class: "DivContainer DivSection", id: "ForosView", Users: MyModules
                    }));
                }
            },
            children: [{
                type: "button",
                props: {
                    type: "button",
                    style: `background: url('./Media/icons/foro2.png') no-repeat;background-size: 100% 100%;`
                }
            }]
        },
        {
            type: "li",
            props: {
                onclick: async () => {
                    const { ReportView } = await
                        import("./Modules/ReportView.js");
                    this.NavigateFunction("ReportView", new ReportView({ class: "DivContainer DivSection", id: "ReportView" }));
                }
            },
            children: [{
                type: "button",
                props: {
                    type: "button",
                    style: `background: url('./Media/icons/bar.png') no-repeat;background-size: 100% 100%;`
                }
            }]
        }
        ]
    }];
}
class PhotoView {
    constructor(Folder = "FAREMC") {
        this.type = "div";
        this.props = { className: "PhotoView carousel", id: Folder + "Viewer"}
        const Carrusel =  { type: "div", props: {class: "wrap"}, children:[
            { type: "ul",  children:[
                { type: "li",  children:[
                    { type: 'img', props: { src: `./Media/PHOTOS/${Folder}/P1.jpg` } }
                ]},{ type: "li",  children:[
                    { type: 'img', props: { src: `./Media/PHOTOS/${Folder}/P2.jpg` } }
                ]},{ type: "li",  children:[
                    { type: 'img', props: { src: `./Media/PHOTOS/${Folder}/P3.jpg` } }
                ]},{ type: "li",  children:[
                    { type: 'img', props: { src: `./Media/PHOTOS/${Folder}/P4.jpg` } }
                ]}            
            ]}
        ]};
        this.children = [         
            Carrusel, 
            this.StyleTag
        ]; 
        setTimeout(()=>{
            function HoverCarousel( elm, settings ){
                this.DOM = {
                  scope: elm,
                  wrap: elm.querySelector('ul').parentNode
                }
                
                this.containerWidth = 0;
                this.scrollWidth = 0;
                this.posFromLeft = 0;    // Stripe position from the left of the screen
                this.stripePos = 0;    // When relative mouse position inside the thumbs stripe
                this.animated = null;
                this.callbacks = {}
                
                this.init()
              }
              
              HoverCarousel.prototype = {
                init(){
                  this.bind()
                },
                
                destroy(){
                  this.DOM.scope.removeEventListener('mouseenter', this.callbacks.onMouseEnter)
                  this.DOM.scope.removeEventListener('mousemove', this.callbacks.onMouseMove)
                },
              
                bind(){
                  this.callbacks.onMouseEnter = this.onMouseEnter.bind(this)
                  this.callbacks.onMouseMove = e => {
                    if( this.mouseMoveRAF ) 
                      cancelAnimationFrame(this.mouseMoveRAF)
              
                    this.mouseMoveRAF = requestAnimationFrame(this.onMouseMove.bind(this, e))
                  }
                  
                  this.DOM.scope.addEventListener('mouseenter', this.callbacks.onMouseEnter)
                  this.DOM.scope.addEventListener('mousemove', this.callbacks.onMouseMove)
                },
                
                // calculate the thumbs container width
                onMouseEnter(e){
                  this.nextMore = this.prevMore = false // reset
              
                  this.containerWidth       = this.DOM.wrap.clientWidth;
                  this.scrollWidth          = this.DOM.wrap.scrollWidth; 
                  // padding in percentage of the area which the mouse movement affects
                  this.padding              = 0.2 * this.containerWidth; 
                  this.posFromLeft          = this.DOM.wrap.getBoundingClientRect().left;
                  var stripePos             = e.pageX - this.padding - this.posFromLeft;
                  this.pos                  = stripePos / (this.containerWidth - this.padding*2);
                  this.scrollPos            = (this.scrollWidth - this.containerWidth ) * this.pos;
              
                  // temporary add smoothness to the scroll 
                  this.DOM.wrap.style.scrollBehavior = 'smooth';
                  
                  if( this.scrollPos < 0 )
                    this.scrollPos = 0;
                  
                  if( this.scrollPos > (this.scrollWidth - this.containerWidth) )
                    this.scrollPos = this.scrollWidth - this.containerWidth
              
                  this.DOM.wrap.scrollLeft = this.scrollPos
                  this.DOM.scope.style.setProperty('--scrollWidth',  (this.containerWidth / this.scrollWidth) * 100 + '%');
                  this.DOM.scope.style.setProperty('--scrollLleft',  (this.scrollPos / this.scrollWidth ) * 100 + '%');
              
                  // lock UI until mouse-enter scroll is finihsed, after aprox 200ms
                  clearTimeout(this.animated)
                  this.animated = setTimeout(() => {
                    this.animated = null
                    this.DOM.wrap.style.scrollBehavior = 'auto';
                  }, 200)
              
                  return this
                },
              
                // move the stripe left or right according to mouse position
                onMouseMove(e){
                  // don't move anything until inital movement on 'mouseenter' has finished
                  if( this.animated ) return
              
                  this.ratio = this.scrollWidth / this.containerWidth
                  
                  // the mouse X position, "normalized" to the carousel position
                  var stripePos = e.pageX - this.padding - this.posFromLeft 
                  
                  if( stripePos < 0 )
                      stripePos = 0
              
                  // calculated position between 0 to 1
                  this.pos = stripePos / (this.containerWidth - this.padding*2) 
                  
                  // calculate the percentage of the mouse position within the carousel
                  this.scrollPos = (this.scrollWidth - this.containerWidth ) * this.pos 
              
                  this.DOM.wrap.scrollLeft = this.scrollPos
                  
                  // update scrollbar
                  if( this.scrollPos < (this.scrollWidth - this.containerWidth) )
                    this.DOM.scope.style.setProperty('--scrollLleft',  (this.scrollPos / this.scrollWidth ) * 100 + '%');
              
                  // check if element has reached an edge
                  this.prevMore = this.DOM.wrap.scrollLeft > 0
                  this.nextMore = this.scrollWidth - this.containerWidth - this.DOM.wrap.scrollLeft > 5
                  
                  this.DOM.scope.setAttribute('data-at',
                    (this.prevMore  ? 'left ' : ' ')
                    + (this.nextMore ? 'right' : '')
                  )
                }
              }
                         
              var carouselElm = document.querySelector('.carousel')
              new HoverCarousel(carouselElm)     
        }, 100)       
    }
    Style = {
        type: "w-style",
        props: {
            ClassList: [
                new WCssClass(".PhotoView", {
                    display: "flex",
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    "justify-content": "left",
                    "align-items": "center",
                }),
                new WCssClass(".PhotoView img", {   
                    height: "100%",
                    width: "auto",                   
                })
            ]
        }
    };
    StyleTag = {
        type: "style",
        props: { innerHTML: `
            @charset "UTF-8";
            .carousel {
            display: block;
            font-size: 0;
            border-radius: 8px;          
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            background: white;
            transform: translateZ(0);
            height: 200px;
            -webkit-overflow-scrolling: touch;
            /* for tablets */
            }
            .touch .carousel {
            overflow: auto;
            }
            .carousel[data-at*=left] > .wrap::before {
            opacity: 1;
            text-indent: -50px;
            }
            .carousel[data-at*=right] > .wrap::after {
            opacity: 1;
            text-indent: -50px;
            }
            .carousel::after {
            content: "";
            pointer-events: none;
            position: absolute;
            z-index: 4;
            bottom: -4px;
            left: 0;
            background: #d82b6a;
            height: 4px;
            border-radius: 4px;
            opacity: 0;
            width: var(--scrollWidth, 0);
            left: var(--scrollLleft, 0);
            transition: opacity 0.2s, bottom 0.2s;
            }
            .carousel:hover::after {
            opacity: 1;
            bottom: -10px;
            }
            .carousel > .wrap {
            overflow: hidden;
            border-radius: 4px;
            }
            .carousel > .wrap::before, .carousel > .wrap::after {
            content: "‹";
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
            width: 50px;
            font-size: 80px;
            text-indent: -30px;
            line-height: 360px;
            font-family: monospace;
            color: #555;
            font-weight: bold;
            border-radius: 8px;
            pointer-events: none;
            transition: 0.2s ease-out;
            background: linear-gradient(to right, white 20%, transparent);
            }
            .carousel > .wrap::after {
            transform: rotate(180deg);
            left: auto;
            right: 0;
            }
            .carousel > .wrap > ul {
            list-style: none;
            white-space: nowrap;
            height: 100%;
            }
            .carousel > .wrap > ul > li {
            display: inline-block;
            vertical-align: middle;
            height: 100%;
            margin: 0 0 0 5px;
            position: relative;
            overflow: hidden;
            transition: 0.25s ease-out;
            }
            .carousel > .wrap > ul > li:first-child {
            margin: 0;
            }
            .carousel > .wrap > ul > li > img {
            display: block;
            height: 100%;
            margin: auto;
            vertical-align: bottom;
            position: relative;
            z-index: 1;
            transition: 1s ease;
            }      
            .carousel, .wrap {
            height:100%
            }        
        `}
    }  
}
export { MasterDomClass };
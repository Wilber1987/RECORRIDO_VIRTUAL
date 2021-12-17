import { WCssClass } from "../WDevCore/WModules/WStyledRender.js";
import "../WDevCore/WComponents/WAppNavigator.js";
import { ComponentsManager, WAjaxTools, WRender } from "../WDevCore/WModules/WComponentsTools.js";
//DEFINICION DE TABLAS
const MyObject = {
    id: 1,
    Category: 2,
    Type: "Type 1",
    Time: "2020-01-01",
    Value: 35
};
const ObjModel = {
    id: 1,
    Category: [{id: 1, desc: "value 1"}, {id: 2, desc: "value 2"}],
    Type: "Type 1",
    Time: "2020-01-01",
    Value: 35
};
class TorreonDoc extends ComponentsManager {
    constructor(props) {
        super();
        this.type = "div";
        this.props = props;
        const NavigateElements = [{
            name: "Depto. Ciencias Economicas",
            action: () => {
                exportRoot.children[2].gotoAndStop(80)
            }
        },{
            name: "Compras",
            action: () => {
                exportRoot.children[2].gotoAndStop(81)
            }
        },{
            name: "RRHH",
            action: () => {
                exportRoot.children[2].gotoAndStop(82)
            }
        },{
            name: "Administración",
            action: () => {
                exportRoot.children[2].gotoAndStop(83)
            }
        },{
            name: "Secretaria Académica",
            action: () => {
                exportRoot.children[2].gotoAndStop(85)
            }
        }, {
            name: "Lab. Robotica",
            action: () => {
                exportRoot.children[2].gotoAndStop(86)
            }
        },{
            name: "Lab. Bionalisis II",
            action: () => {
                exportRoot.children[2].gotoAndStop(87)
            }
        },{
            name: "Contabilidad",
            action: () => {
                exportRoot.children[2].gotoAndStop(88)
            }
        },{
            name: "Sala de Profesores",
            action: () => {
                exportRoot.children[2].gotoAndStop(89)
            }
        },{
            name: "Lab. Bioanalisis I",
            action: () => {
                exportRoot.children[2].gotoAndStop(94)
            }
        },{
            name: "Redes",
            action: () => {
                exportRoot.children[2].gotoAndStop(95)
            }
        },{
            name: "Vice-Decanatura",
            action: () => {
                exportRoot.children[2].gotoAndStop(97)
            }
        },{
            name: "Caja",
            action: () => {
                exportRoot.children[2].gotoAndStop(98)
            }
        },];
        const Nav = {
            type: "w-app-navigator",
            props: {
                id: "TNav",
                Direction: "column",
                title: "Torreón Universitario",
                Elements: NavigateElements
            }
        };
       
        this.children = [
            Nav,
        ]
    }
}
export { TorreonDoc }
/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'f3e675d5fec984e558ac312dafa390dc',
                type: 'image',
                rect: ['-1px', '-254px','301px','452px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f3e675d5fec984e558ac312dafa390dc.jpg",'0px','0px']
            },
            {
                id: 'logo2',
                type: 'image',
                rect: ['-9px', '-7px','341px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-2740px', '-98px','5780px','530px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.04','0.04']]
            },
            {
                id: 'lo3',
                type: 'image',
                rect: ['-947px', '-280px','2289px','620px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo3.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-1122px', '-304px','2550px','854px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_5',
                type: 'image',
                rect: ['-958px', '-447px','2240px','1130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.svg",'0px','0px'],
                transform: [[],[],[],['0.09','0.09']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lo3}": [
                ["style", "top", '-280px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "height", '620px'],
                ["style", "opacity", '0'],
                ["style", "left", '-947px'],
                ["style", "width", '2289px']
            ],
            "${_f3e675d5fec984e558ac312dafa390dc}": [
                ["style", "top", '-10px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '452px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "width", '301px']
            ],
            "${__1}": [
                ["style", "top", '-60px'],
                ["transform", "scaleY", '0.04'],
                ["transform", "scaleX", '0.04'],
                ["style", "opacity", '0'],
                ["style", "left", '-2740px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-304px'],
                ["style", "left", '-1122px'],
                ["style", "height", '854px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,2550,294,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2550px']
            ],
            "${_logo2}": [
                ["style", "top", '-7px'],
                ["style", "height", '196px'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "width", '341px']
            ],
            "${__5}": [
                ["style", "top", '-447px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "scaleX", '0.09'],
                ["style", "opacity", '0'],
                ["style", "left", '-958px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13750,
            autoPlay: true,
            timeline: [
                { id: "eid137", tween: [ "style", "${__1}", "top", '-99px', { fromValue: '-60px'}], position: 500, duration: 250 },
                { id: "eid88", tween: [ "style", "${_t}", "clip", [0,2550,854,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2550,294,0]}], position: 9812, duration: 2210 },
                { id: "eid133", tween: [ "style", "${_f3e675d5fec984e558ac312dafa390dc}", "top", '-165px', { fromValue: '-10px'}], position: 4852, duration: 296, easing: "easeInOutCubic" },
                { id: "eid138", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 5398, duration: 250 },
                { id: "eid139", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 164 },
                { id: "eid84", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 9562, duration: 250 },
                { id: "eid85", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 250 },
                { id: "eid135", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid136", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 250 },
                { id: "eid82", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 9312, duration: 250 },
                { id: "eid83", tween: [ "style", "${_logo2}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 250 },
                { id: "eid114", tween: [ "style", "${_lo3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid129", tween: [ "style", "${_lo3}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 148 },
                { id: "eid132", tween: [ "style", "${_lo3}", "opacity", '0', { fromValue: '1'}], position: 4648, duration: 250 },
                { id: "eid130", tween: [ "style", "${_lo3}", "opacity", '1', { fromValue: '0'}], position: 5082, duration: 250 },
                { id: "eid131", tween: [ "style", "${_lo3}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 250 },
                { id: "eid104", tween: [ "style", "${_f3e675d5fec984e558ac312dafa390dc}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid111", tween: [ "style", "${_f3e675d5fec984e558ac312dafa390dc}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7838920");

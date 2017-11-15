joint.dia.Element.define('quartz.State', {
    size: { width: 150, height: 80 },
    attrs: {
        '.state': {
            fill: '#ffffff',
            stroke: '#000000',
            width: 150,
            height: 80
        },
        '.header': {
            fill: 'blue',
            stroke: '#000000',
            height: 20,
            'ref': '.state',
            'ref-width': 1,
            x: 0,
            y: 0
        },
        '.name': {
            fill: 'white',
            text: '',
            'font-size': 14,
            'ref': '.state',
            'ref-x': .5,
            'ref-y': 10,
            'text-anchor': 'middle',
            'y-alignment': 'middle',
            'font-family': 'Arial, helvetica, sans-serif'
        },
        '.actions': {
            fill: 'black',
            text: '',
            'font-size': 14,
            'ref': '.state',
            'ref-x': 5,
            'ref-y': 25,
            'text-anchor': 'left',
            'y-alignment': 'left',
            'font-family': 'Arial, helvetica, sans-serif'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><rect class="state"/></g><rect class="header"/><text class="name"/><text class="actions"/></g>'
});

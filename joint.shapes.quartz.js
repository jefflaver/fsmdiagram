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
            'ref-width': '1',
            'ref-x': 0,
            'ref-y': 0
        },
        'text': {
            fill: 'white',
            text: '',
            'font-size': 14,
            'ref-x': .5,
            'ref-y': 10,
            'text-anchor': 'middle',
            'y-alignment': 'middle',
            'font-family': 'Arial, helvetica, sans-serif'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><rect class="state"/></g><rect class="header"/><text/></g>'
});

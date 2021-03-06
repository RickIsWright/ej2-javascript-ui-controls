/**
 * Default sample for smith chart
 */
import { Smithchart } from '../../src/smithchart/smithchart';
import { ISmithchartLoadEventArgs} from '../../src/smithchart/model/interface';
import { EmitType } from '@syncfusion/ej2-base';
let printRendering: EmitType<ISmithchartLoadEventArgs> = (args: ISmithchartLoadEventArgs) => {
    args.smithchart.export('PNG','Smith chart');
};
let smithchart: Smithchart = new Smithchart({
    title: {
        visible: true,
        text: 'Transmission details'
    },
    radialAxis:{
        visible: false,
        labelIntersectAction:'Hide',
    },
    series: [
        {
            points: [
                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ],
            name: 'Transmission1',
            enableAnimation: true,
            tooltip: { visible: true },
            marker: {
                shape: 'Circle',
                visible: true,
                border: {
                    width: 2,
                }
            }
        }
    ],
    loaded:printRendering 
});
smithchart.appendTo('#container');

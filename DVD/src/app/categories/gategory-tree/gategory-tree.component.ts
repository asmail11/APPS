import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import {event as currentEvent} from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-gategory-tree',
  templateUrl: './gategory-tree.component.html',
  styleUrls: ['./gategory-tree.component.css']
})
export class GategoryTreeComponent {
 /*
  @Input()
  public programId: number;

  private treeData = [
    {
      "name": "Top Level",
      "parent": "null",
      "value": 10,
      "type": "black",
      "level": "red",
      "children": [
        {
          "name": "Level 2: A",
          "parent": "Top Level",
          "value": 15,
          "type": "grey",
          "level": "red",
          "children": [
            {
              "name": "Son of A",
              "parent": "Level 2: A",
              "value": 5,
              "type": "steelblue",
              "level": "orange"
            },
            {
              "name": "Daughter of A",
              "parent": "Level 2: A",
              "value": 8,
              "type": "steelblue",
              "level": "red"
            }
          ]
        },
        {
          "name": "Level 2: B",
          "parent": "Top Level",
          "value": 10,
          "type": "grey",
          "level": "green"
        }
      ]
    }
  ];

  @ViewChild('categoryTree')
  private categoryTree: ElementRef;
  private root: any;
  private index: number;
  private diagonal: any;
  private duration: number;
  private tree: any;
  private svg: any;
  private nodes: any;
  private links: any;
  private node: any;
  private tooltip: any;
  @ViewChild('myInfo')
  private myInfo: ElementRef;
  private depth: number;
  private nodeEnter: any;

  private margin: any = {
      top: 20,
      right: 120,
      bottom: 20,
      left: 120
  };

  private width: number = 960 - this.margin.right - this.margin.left;
  private height: number = 600 - this.margin.top - this.margin.bottom;

  constructor() { }

  private initTree(): void {
    this.index = 0;
    this.duration = 750;
    this.tree = d3.layout.tree().size([this.height, this.width]);
    this.diagonal = d3.svg.diagonal()
        .projection((d) => {
            return [d.y, d.x];
        });
    this.svg = d3.select(this.categoryTree.nativeElement).append('svg')
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.top + this.margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    this.root.x = this.height / 2;
    this.root.y = 0;
    d3.select(self.frameElement).style('height', '500px');
  }

  private update(source: any): void{
    this.nodes = this.tree.nodes(this.root).reverse(),
    this.links = this.tree.links(this.nodes);

// Normalize for fixed-depth.
this.nodes.forEach((d: any) => {
    d.y = d.depth * 180;
});

// Update the nodes…
this.node = this.svg.selectAll('g.node')
    .data(this.nodes, (d: any) => d.id || (d.id = ++this.i))
    .attr('fill', 'black')
    .attr('r', 5.5);


// Enter any new nodes at the parent's previous position.
const nodeEnter = this.node.enter().append('g')
    .attr('class', 'node')
    .attr('transform', (d: any) => 'translate(' + source.y + ',' + source.x + ')')
    .on('mousemove')
  }
  */
}





import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() nodes: any = [{ id: 1, name: "root val", isExpanded: false, children: [{id:2, name:"child 1", isSelected: false},{id:3, name:"child 2", isSelected: false}]},
    { id: 4, name: "root val1", isExpanded: false, children: [{id:5, name:"child 3", isSelected: false},{id:6, name:"child 4", isSelected: false}]},
    { id: 8, name: "root val1", isExpanded: false, children: [], isSelected: false},
    { id: 9, name: "root val1", isExpanded: false, children: [{id:59, name:"child 3", isSelected: false},{id:96, name:"child 4", isSelected: false}]}];

  @Output() nodeClick: EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  setNoSelection(){
    for(var index=0; index<this.nodes.length; index++){
      this.nodes[index].isSelected = false;
      if(this.nodes[index].children !== undefined && this.nodes[index].children.length>0){
        for(var cnt=0; cnt<this.nodes[index].children.length; cnt++){
          this.nodes[index].children[cnt].isSelected = false;
          if(this.nodes[index].children[cnt].children !== undefined && this.nodes[index].children[cnt].children.length>0){
            for(var cnt=0; cnt<this.nodes[index].children[cnt].children.length; cnt++){
              this.nodes[index].children[cnt].children[cnt].isSelected = false;
            }
          }
        }
      }
    }
  }

  onNodeClick(node: any, event: any){
    if(node.children !== undefined && node.children.length>0){
      node.isExpanded = !node.isExpanded;
    }else{
      this.setNoSelection();
      node.isSelected = true;
    }
    this.nodeClick.emit({
      node: node,
      event: event
    });
  }

  getArrowClass(node: any){
    if((node.children && node.children.length === 0) || node.children === undefined){
      return "glyphicon glyphicon-menu-right white-icon";
    }
    if(node.isExpanded){
      return "glyphicon glyphicon-menu-down";
    }
    return "glyphicon glyphicon-menu-right";
  }
}

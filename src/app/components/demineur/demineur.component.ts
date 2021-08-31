import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demineur',
  templateUrl: './demineur.component.html',
  styleUrls: ['./demineur.component.css']
})
export class DemineurComponent implements OnInit {

  private _cases: Array<Array<Case>>;
  private _width: number;
  private _height: number;
  private _nbBomb: number;

  constructor() {
      this._height = 15;
      this._width = 20;
      this._cases = new Array<Array<Case>>();
      this._nbBomb = 40;
  }

  ngOnInit(): void {
    for(let i = 0; i < this._height; i++) {

      let row: Array<Case> = new Array<Case>();

      for(let j = 0; j < this._width; j++) {
          
          row.push(new Case((j + 1), (i + 1), false));
      }

      this._cases.push(row);
    }

    for(let i = 0; i < this._nbBomb; i++) {

      let x: number;
      let y: number;

      do {
        x = Math.trunc(Math.random()*(this._width));
        y = Math.trunc(Math.random()*(this._height));
      }while(this._cases[y][x].hasBomb === true);

      this._cases[y][x].hasBomb = true;
      
    }
  }

  onClick(cell: Case) {
    cell.clicked = true;
  }

  onRightClick(event: Event, cell: Case) {
    event.preventDefault();
    cell.marked = true;
  }

  get cases(): Array<Array<Case>> { return this._cases }
  set cases(tab: Array<Array<Case>>) { this._cases = tab }

  get width(): number { return this._width }
  set width(val: number) { this._width = val }

  get height(): number { return this._height }
  set height(val: number) { this._height = val }

}

class Case {

  hasBomb: boolean;
  clicked: boolean;
  marked: boolean;

  constructor(private _x: number,
    private _y: number,
    private _state: boolean) {
      this.hasBomb = false;
      this.clicked = false;
      this.marked = false;
    }

  get x(): number { return this._x }
  set x(val: number) { this._x = val }

  get y(): number { return this._y }
  set y(val: number) { this._y = val }

  get state(): boolean { return this._state }
  set state(val: boolean) { this._state = val }
}

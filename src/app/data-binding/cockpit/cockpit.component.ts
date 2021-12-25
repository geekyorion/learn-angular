import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // Output has also an option to put an alias for the binding like Input
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName: string = '';
  // newServerContent: string = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef | undefined;

  // static: true, when we want to access this in ngOnInit so angular will make sure that this element should fetch this
  // before we run the code in ngOnInit
  // @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      // since we have ElementRef | undefined for the 'this.serverContentInput', we need to make sure
      // that it is not undefined before fetching the value, use ? here
      serverContent: this.serverContentInput?.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput?.nativeElement.value
    });
  }

}

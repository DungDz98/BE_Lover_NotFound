import { Component, OnInit } from '@angular/core';
import {Stomp} from "@stomp/stompjs";

@Component({
  selector: 'app-socket-home',
  templateUrl: './socket-home.component.html',
  styleUrls: ['./socket-home.component.css']
})
export class SocketHomeComponent implements OnInit {
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';
  message: string = "";

  greetings: string[] = [];
  disabled = true;
  name: string | undefined;
  private stompClient: any;

  constructor() {
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    // đường dẫn đến server
    const socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      // là chờ xèm thằng server gửi về.
      _this.stompClient.subscribe('/topic/public', function (hello: any) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });

    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.stompClient.send(
      '/gkz/hello',
      {},
      // Dữ liệu được gửi đi
      JSON.stringify({'name': this.name, 'message': this.message})
    );
  }

  showGreeting(message: any) {
    this.greetings.push(message);
  }

  ngOnInit(): void {
  }
}

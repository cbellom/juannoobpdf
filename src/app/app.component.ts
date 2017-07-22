import { Component, OnInit } from '@angular/core';
import { Data }    from './model/data';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

    powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];

    model = new Data(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() {
      this.submitted = true;
      this.createPdf();
    }

    newHero() {
      this.model = new Data(42, '', '');
    }

    createPdf(){
      let docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
      // open the PDF in a new window
      pdfMake.createPdf(docDefinition).download('optionalName.pdf');
    }
  }

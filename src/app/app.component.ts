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

    model = new Data(1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1');

    submitted = false;

    onSubmit() {
      this.submitted = true;
      this.createPdf();
    }

    newData() {
      this.model = new Data(42, '', '', '', '', '', '', '', '', '', '');
    }

    createPdf(){
      let docDefinition = {
        content: [
          'paragraph 1',
          'paragraph 2',
          {
            columns: [
              'first column is a simple text',
              {
                stack: [
                  // second column consists of paragraphs
                  'paragraph A',
                  'paragraph B',
                  'these paragraphs will be rendered one below another inside the column'
                ],
                fontSize: 15
              }
            ]
          }
        ]
      };
      // open the PDF in a new window
      pdfMake.createPdf(docDefinition).download('optionalName.pdf');
    }
  }

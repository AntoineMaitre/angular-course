import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatInput'
})

export class FormatInputPipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return null;
    }

    if (value.length > 0)
      value[0].toUpperCase();

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {

      let word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the'];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}

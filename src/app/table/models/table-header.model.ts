export default class TableHeader {

  constructor(
    public name: string,
    public title: string,
    public sortable: boolean,
    public searchable: boolean,
    public styling?: ''
  ) {}
}

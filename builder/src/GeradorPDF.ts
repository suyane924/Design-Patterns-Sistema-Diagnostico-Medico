export default class GeradorPDF {
  private pageOrientation: string;
  private unit: string;
  private pageSizeX: number;
  private pageSizeY: number;
  private marginTop: number;
  private marginRight: number;
  private marginBottom: number;
  private marginLeft: number;
  private hasHeader: boolean;
  private headerHight: number;
  private hasFooter: boolean;
  private footerHight: number;
  private pageColor: string;
  private encode: string;

  constructor(
    pageOrientation: string,
    unit: string,
    pageSizeX: number,
    pageSizeY: number,
    marginTop: number,
    marginRight: number,
    marginBottom: number,
    marginLeft: number,
    hasHeader: boolean,
    headerHight: number,
    hasFooter: boolean,
    footerHight: number,
    pageColor: string,
    encode: string
  ) {
    this.pageOrientation = pageOrientation;
    this.unit = unit;
    this.pageSizeX = pageSizeX;
    this.pageSizeY = pageSizeY;
    this.marginTop = marginTop;
    this.marginRight = marginRight;
    this.marginBottom = marginBottom;
    this.marginLeft = marginLeft;
    this.hasHeader = hasHeader;
    this.headerHight = headerHight;
    this.hasFooter = hasFooter;
    this.footerHight = footerHight;
    this.pageColor = pageColor;
    this.encode = encode;
  }

  setPageOrientation(value: string) {
    this.pageOrientation = value;
  }

  getPageOrientation(): string {
    return this.pageOrientation;
  }

  setUnit(value: string) {
    this.unit = value;
  }

  getUnit(): string {
    return this.unit;
  }

  setPageSizeX(value: number) {
    this.pageSizeX = value;
  }

  getPageSizeX(): number {
    return this.pageSizeX;
  }

  setPageSizeY(value: number) {
    this.pageSizeY = value;
  }

  getPageSizeY(): number {
    return this.pageSizeY;
  }

  setMarginTop(value: number) {
    this.marginTop = value;
  }

  getMarginTop(): number {
    return this.marginTop;
  }

  setMarginRight(value: number) {
    this.marginRight = value;
  }

  getMarginRight(): number {
    return this.marginRight;
  }

  setMarginBottom(value: number) {
    this.marginBottom = value;
  }

  getMarginBottom(): number {
    return this.marginBottom;
  }

  setMarginLeft(value: number) {
    this.marginLeft = value;
  }

  getMarginLeft(): number {
    return this.marginLeft;
  }

  setHasHeader(value: boolean) {
    this.hasHeader = value;
  }

  getHasHeader(): boolean {
    return this.hasHeader;
  }

  setHeaderHight(value: number) {
    this.headerHight = value;
  }

  getHeaderHight(): number {
    return this.headerHight;
  }

  setHasFooter(value: boolean) {
    this.hasFooter = value;
  }

  getHasFooter(): boolean {
    return this.hasFooter;
  }

  setFooterHight(value: number) {
    this.footerHight = value;
  }

  getFooterHight(): number {
    return this.footerHight;
  }

  setPageColor(value: string) {
    this.pageColor = value;
  }

  getPageColor(): string {
    return this.pageColor;
  }

  setEncode(value: string) {
    this.encode = value;
  }

  getEncode(): string {
    return this.encode;
  }

  toString(): string {
    return `
pageOrientation = ${this.pageOrientation};
unit = ${this.unit};
pageSizeX = ${this.pageSizeX};
pageSizeY = ${this.pageSizeY};
marginTop = ${this.marginTop};
marginRight = ${this.marginRight};
marginBottom = ${this.marginBottom};
marginLeft = ${this.marginLeft};
hasHeader = ${this.hasHeader};
headerHight = ${this.headerHight};
hasFooter = ${this.hasFooter};
footerHight = ${this.footerHight};
pageColor = ${this.pageColor};
encode = ${this.encode};
    `;
  }
}

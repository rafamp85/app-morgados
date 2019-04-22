export class Register {
    constructor(
        public id: string,
        public name: string,
        public street: string,
        public colony: string,
        public reference: string,
        public phone: string,
        public nextVisit: Date
    ) {  }
}
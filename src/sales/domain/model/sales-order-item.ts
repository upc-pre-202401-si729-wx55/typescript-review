import { v4 as uuidv4 } from 'uuid';
export class SalesOrderItem {
    get salesOrderId(): string {
        return this._salesOrderId;
    }
    private readonly _productId: string;
    private readonly _quantity: number;
    private readonly _unitPrice: number;
    private readonly _id: string;
    private readonly _salesOrderId: string;

    constructor(salesOrderId: string, productId: string, quantity: number, unitPrice: number) {
        this._salesOrderId = salesOrderId;
        this._id = uuidv4();
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
    }

    get id(): string {
        return this._id;
    }

    calculateItemPrice = (): number => this._quantity * this._unitPrice;

    get productId(): string {
        return this._productId;
    }

    get quantity(): number {
        return this._quantity;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }
}
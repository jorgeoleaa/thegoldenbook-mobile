/* tslint:disable */
/* eslint-disable */
/**
 * The Golden Book API
 * API for a book-selling business
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@thegoldenbook.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OrderItem } from './OrderItem';
import {
    OrderItemFromJSON,
    OrderItemFromJSONTyped,
    OrderItemToJSON,
    OrderItemToJSONTyped,
} from './OrderItem';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof Order
     */
    orderDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    nickname?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    orderStatusId?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    orderStatusName?: string;
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    orderItems?: Array<OrderItem>;
}

/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): value is Order {
    return true;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'orderDate': json['orderDate'] == null ? undefined : (new Date(json['orderDate'])),
        'price': json['price'] == null ? undefined : json['price'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'nickname': json['nickname'] == null ? undefined : json['nickname'],
        'email': json['email'] == null ? undefined : json['email'],
        'orderStatusId': json['orderStatusId'] == null ? undefined : json['orderStatusId'],
        'orderStatusName': json['orderStatusName'] == null ? undefined : json['orderStatusName'],
        'orderItems': json['orderItems'] == null ? undefined : ((json['orderItems'] as Array<any>).map(OrderItemFromJSON)),
    };
}

export function OrderToJSON(json: any): Order {
    return OrderToJSONTyped(json, false);
}

export function OrderToJSONTyped(value?: Order | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'orderDate': value['orderDate'] == null ? undefined : ((value['orderDate']).toISOString()),
        'price': value['price'],
        'userId': value['userId'],
        'nickname': value['nickname'],
        'email': value['email'],
        'orderStatusId': value['orderStatusId'],
        'orderStatusName': value['orderStatusName'],
        'orderItems': value['orderItems'] == null ? undefined : ((value['orderItems'] as Array<any>).map(OrderItemToJSON)),
    };
}


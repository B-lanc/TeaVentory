/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	FullRecipe = "FullRecipe",
	Inventory = "inventory",
	ItemRecipes = "item_recipes",
	Items = "items",
	MiddleItemRecipes = "middle_item_recipes",
	MiddleItems = "middle_items",
	Transactions = "transactions",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type FullRecipeRecord = {
	inv_id?: RecordIdString
	item_id: RecordIdString
	mid_inv_id: RecordIdString
	mid_qty: number
	mid_size: number
	qty: number
}

export type InventoryRecord = {
	delivery_delay?: number
	delivery_duration?: number
	inv_id: string
	name: string
	size: number
	stock?: number
	supplier?: string
	unit: string
}

export type ItemRecipesRecord = {
	inv_id?: RecordIdString
	item_id: RecordIdString
	mid_id?: RecordIdString
	qty: number
}

export type ItemsRecord = {
	item_id: string
	name: string
}

export type MiddleItemRecipesRecord = {
	inv_id: RecordIdString
	item_id: RecordIdString
	qty: number
}

export type MiddleItemsRecord = {
	item_id: string
	name: string
	size: number
	unit: string
}

export type TransactionsRecord = {
	datetime: IsoDateString
	item_id: RecordIdString
	qty: number
	receipt: string
	topping_id?: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type FullRecipeResponse<Texpand = unknown> = Required<FullRecipeRecord> & BaseSystemFields<Texpand>
export type InventoryResponse<Texpand = unknown> = Required<InventoryRecord> & BaseSystemFields<Texpand>
export type ItemRecipesResponse<Texpand = unknown> = Required<ItemRecipesRecord> & BaseSystemFields<Texpand>
export type ItemsResponse<Texpand = unknown> = Required<ItemsRecord> & BaseSystemFields<Texpand>
export type MiddleItemRecipesResponse<Texpand = unknown> = Required<MiddleItemRecipesRecord> & BaseSystemFields<Texpand>
export type MiddleItemsResponse<Texpand = unknown> = Required<MiddleItemsRecord> & BaseSystemFields<Texpand>
export type TransactionsResponse<Texpand = unknown> = Required<TransactionsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	FullRecipe: FullRecipeRecord
	inventory: InventoryRecord
	item_recipes: ItemRecipesRecord
	items: ItemsRecord
	middle_item_recipes: MiddleItemRecipesRecord
	middle_items: MiddleItemsRecord
	transactions: TransactionsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	FullRecipe: FullRecipeResponse
	inventory: InventoryResponse
	item_recipes: ItemRecipesResponse
	items: ItemsResponse
	middle_item_recipes: MiddleItemRecipesResponse
	middle_items: MiddleItemsResponse
	transactions: TransactionsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'FullRecipe'): RecordService<FullRecipeResponse>
	collection(idOrName: 'inventory'): RecordService<InventoryResponse>
	collection(idOrName: 'item_recipes'): RecordService<ItemRecipesResponse>
	collection(idOrName: 'items'): RecordService<ItemsResponse>
	collection(idOrName: 'middle_item_recipes'): RecordService<MiddleItemRecipesResponse>
	collection(idOrName: 'middle_items'): RecordService<MiddleItemsResponse>
	collection(idOrName: 'transactions'): RecordService<TransactionsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}

export interface Person {
	id: string;
	name: string;
	age: string;
	skill: string[];
}

export interface Task {
	id?: string;
	name: string;
	date: string;
	persons: Person[];
}
export interface respuesta {
    count:    number;
    next:     string;
    previous: null;
    results:  Pokemon[];
}

export interface Pokemon {
    name: string;
    url:  string;
}
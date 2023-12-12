


export interface Comment {
    for: number;
    from: string;
    comment: string;
    timestamp: Date
} 
export const useComments = defineStore('product-comments', {
    state: ()=> ({
        productComments: [] as Comment[]
    }),
    actions: {
        addComment(comment:Comment){
            this.productComments.unshift(comment)
        },
        getCommentsForProduct(productId:number){
            const filtered = this.productComments.filter(comment=>comment.for === productId)
            return filtered
        }
    }
    
})
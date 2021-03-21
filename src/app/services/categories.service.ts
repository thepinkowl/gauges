import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

export type Category = {
  cid?: string;
  parentcid?: string;
  title: string;
  categories?: Array<Category>;
}

export const OtherCategory: Category = {
  title: "Others",
  cid: "other",
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public categories: BehaviorSubject<Category[]> = new BehaviorSubject([]);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public getCategories(): Observable<Category[]> {
    return this.categories;
  }

  public loadCategories() {
    this.firestore.collection('categories').get().subscribe(categoriesQuerySnapshot => {
      const categories: Array<Category> = [];
      categoriesQuerySnapshot.forEach(doc => {
        const category: Category = doc.data() as Category;
        categories.push({ ...category, cid: doc.id });
        if (category.categories) {
          category.categories.forEach(cat => {
            let parentcid = doc.id;
            categories.push({ ...cat, parentcid, cid: `${parentcid}.${cat.title}` });
          });
        }
      })
      this.categories.next(categories);
    })
  }
}

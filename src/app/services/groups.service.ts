import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { Group } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  public groups: BehaviorSubject<{}[]> = new BehaviorSubject([]);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public fetchAndRegisterGroups(groups: Group[]) {
    groups.forEach(group => {
      const gid = group.gid

      this.firestore.doc(`groups/${gid}`).get().subscribe(doc => {
        const groupData = { ...doc.data(), gid }
        this.groups.next([
          ...this.groups.value.filter((g: Group) => g.gid !== gid),
          groupData
        ])
      });
    })
  }

  public createGroup(user: User, name: string) {
    this.firestore.collection(`groups`).add({ name, createdBy: user.uid }).then(doc => {
      doc.collection('memberships').doc(user.uid).set({});
      this.firestore.collection(`users/${user.uid}/groups`).doc(doc.id).set({});
    })
  }

  public getGroups() {
    return this.groups.getValue().map((group: Group) => ({
      name: group.name,
      gid: group.gid
    }))
  }
}

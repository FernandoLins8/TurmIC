import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

import Instructor from "./Instructor";
import SubjectTag from "./SubjectTag";
import OtherLink from './OtherLink';
import Schedule from './Schedule';

@Entity('subject')
class Subject {
  @PrimaryColumn()
  id: string

  @Column()
  semester: string

  @Column()
  whatsapp: string

  @Column()
  telegram: string

  @Column()
  classroom: string

  @Column()
  meet: string

  @Column()
  site: string

  @Column()
  subject_tag_code: string

  @Column()
  instructor_email: string

  @JoinColumn({ name: 'subject_tag_code' })
  @ManyToOne(type => SubjectTag)
  subject_tag: SubjectTag

  @JoinColumn({ name: 'instructor_email' })
  @ManyToOne(type => Instructor)
  instructor: Instructor

  @JoinColumn()
  @OneToMany(type => OtherLink, link => link.subject)
  other_links: OtherLink[]

  @JoinColumn()
  @OneToMany(type => Schedule, link => link.subject)
  schedule: Schedule[]

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export default Subject

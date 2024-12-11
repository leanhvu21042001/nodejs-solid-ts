import ITagRepository from '../repositories/tag.repository'
import { TagEntity } from '../tag.entity'

export type CreateTagCommandInput = {
  title: TagEntity['title']
}

export class CreateTagCommand {
  constructor(private tagRepository: ITagRepository) {}

  execute(input: CreateTagCommandInput) {
    const tag = new TagEntity(input.title)
    return this.tagRepository.add(tag)
  }
}

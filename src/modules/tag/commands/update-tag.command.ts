import ITagRepository from '../repositories/tag.repository'
import { TagEntity } from '../tag.entity'

export type UpdateTagCommandInput = {
  id: TagEntity['id']
  title: TagEntity['title']
}

export class UpdateTagCommand {
  constructor(private tagRepository: ITagRepository) {}

  async execute(input: UpdateTagCommandInput) {
    const tag = new TagEntity(input.title)
    tag.setId(input.id)
    return await this.tagRepository.add(tag)
  }
}

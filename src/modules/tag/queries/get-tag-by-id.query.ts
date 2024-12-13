import ITagRepository from '../repositories/tag.repository'
import { TagEntity } from '../tag.entity'

export type GetTagByIDInput = {
  id: TagEntity['id']
}

export class GetTagByIDQuery {
  constructor(private tagRepository: ITagRepository) {}

  async execute(input: GetTagByIDInput) {
    return await this.tagRepository.findById(input.id)
  }
}

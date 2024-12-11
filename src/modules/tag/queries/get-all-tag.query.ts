import ITagRepository from '../repositories/tag.repository'

export class GetAllTagQuery {
  constructor(private tagRepository: ITagRepository) {}

  execute() {
    return this.tagRepository.findAll()
  }
}

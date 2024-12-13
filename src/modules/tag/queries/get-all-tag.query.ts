import ITagRepository from '../repositories/tag.repository'

export class GetAllTagQuery {
  constructor(private tagRepository: ITagRepository) {}

  async execute() {
    return await this.tagRepository.findAll()
  }
}

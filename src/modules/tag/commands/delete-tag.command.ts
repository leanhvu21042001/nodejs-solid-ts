import ITagRepository from '../repositories/tag.repository'
import { TagEntity } from '../tag.entity'

export type DeleteTagCommandInput = {
  id: TagEntity['id']
}

export class DeleteTagCommand {
  constructor(private tagRepository: ITagRepository) {}

  async execute(input: DeleteTagCommandInput) {
    return await this.tagRepository.delete(input.id)
  }
}

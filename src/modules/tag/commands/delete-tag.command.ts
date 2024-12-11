import ITagRepository from '../repositories/tag.repository'
import { TagEntity } from '../tag.entity'

export type DeleteTagCommandInput = {
  id: TagEntity['id']
}

export class DeleteTagCommand {
  constructor(private tagRepository: ITagRepository) {}

  execute(input: DeleteTagCommandInput) {
    return this.tagRepository.delete(input.id)
  }
}

import { CreateTagCommand } from 'src/modules/tag/commands/create-tag.command'
import { DeleteTagCommand } from 'src/modules/tag/commands/delete-tag.command'
import { UpdateTagCommand } from 'src/modules/tag/commands/update-tag.command'
import { GetAllTagQuery } from 'src/modules/tag/queries/get-all-tag.query'
import { GetTagByIDQuery } from 'src/modules/tag/queries/get-tag-by-id.query'
import { TagRepository } from 'src/modules/tag/repositories/tag.repository.impl'

const tagRepository = new TagRepository()

const UserDI = {
  createTagCommand: new CreateTagCommand(tagRepository),
  deleteTagCommand: new DeleteTagCommand(tagRepository),
  updateTagCommand: new UpdateTagCommand(tagRepository),
  getTagByIDQuery: new GetTagByIDQuery(tagRepository),
  getAllTagQuery: new GetAllTagQuery(tagRepository),
}

export { UserDI }

import { BaseDomainException } from 'src/libs/exceptions-domain/exceptions'

export class BlogTitleEmptyDomainException extends BaseDomainException {
  constructor() {
    super('BlogTitleEmptyDomainException', 'Blog title cannot be empty')
  }
}

export class BLogAlreadyPublishedDomainException extends BaseDomainException {
  constructor() {
    super('BLogAlreadyPublishedDomainException', 'Blog already published')
  }
}

export class BLogAlreadyUnPublishedDomainException extends BaseDomainException {
  constructor() {
    super('BLogAlreadyUnPublishedDomainException', 'Blog already un-published')
  }
}

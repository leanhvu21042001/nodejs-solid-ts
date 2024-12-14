export class BaseDomainException extends Error {
  public type: string
  public errorMessage: string
  public errorDetails: Array<object>

  constructor(type: string, message: string, details?: Array<object>) {
    super(message)
    this.type = type || this.constructor.name
    this.errorMessage = message
    this.errorDetails = details ?? []
    // this.public = public
    // this.operational = true
    // this.logging = logging

    // create stack trace
    Error.captureStackTrace(this, this.constructor)
  }
}
